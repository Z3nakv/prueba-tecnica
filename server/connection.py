from flask import Flask, jsonify
from flask_cors import CORS
import xmlrpc.client
from vercel_wsgi import handle_request

app = Flask(__name__)
cors = CORS(app)

url = "https://tralsa-new-test2.odoo.com"
db = "tralsa-new-test2"
username = "api-pruebatecnica@trigono.com"
password = "12345"



def get_sales_data():
    common = xmlrpc.client.ServerProxy(f"{url}/xmlrpc/2/common")
    uid = common.authenticate(db, username, password, {})
    models = xmlrpc.client.ServerProxy(f"{url}/xmlrpc/2/object")

    sales = models.execute_kw(
        db, uid, password,
        'sale.order', 'search_read',
        [],
        {'fields': ['id', 'name', 'amount_total'], 'limit': 10}
    )

    return sales

@app.route('/', methods=['GET'])
def get_sales():
    
    sales = get_sales_data()

    return jsonify(sales)

if __name__ == '__main__':
    app.run()

# def handler(request, *args, **kwargs):
# return handle_request(app, request, *args, **kwargs)
