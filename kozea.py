#!/usr/bin/env python
from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
@app.route('/<page>')
def page(page='index'):
    recorded_pages = ['404', 'about', 'activity', 'contact', 'expertise',
        'index', 'legal', 'references']
    if page in recorded_pages:
        return render_template('{}.html'.format(page), page=page)
    else:
        return render_template('404.html')


if __name__ == '__main__':
    from sassutils.wsgi import SassMiddleware
    app.wsgi_app = SassMiddleware(app.wsgi_app, {
        'kozea': ('static', 'static', '/static')})
    app.run(debug=True, host='0.0.0.0')
