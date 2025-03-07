import xmlrpc.client

# * Conexion a la base de datos de Odoo

url = "https://tralsa-new-test2.odoo.com"
db = "tralsa-new-test2"
username = "api-pruebatecnica@trigono.com"
password = "12345"

def get_detracciones_odoo():
    common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(url))
    uid = common.authenticate(db, username, password, {})
    models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(url))
    
    fields = [
        'id',                 
        'name',
        'create_date',       
        'date_order',
        'state',
        'partner_id',
        'pricelist_id',
        'payment_term_id',
        'user_id',
        'fiscal_position_id',
        'amount_tax',
        'amount_untaxed',
        'amount_undiscounted',
        'amount_total',
    ]
    
    ventas = models.execute_kw(
        db, uid, password,
        'sale.order', 'search_read',
        [],
        {
            'fields': fields,
            'limit': 1000, # Limite de 1000
        }
    )
      
    productos = models.execute_kw(
        db, uid, password,
        'sale.order.line', 'search_read',
        [],
        {
            'fields': ['id', 'name', 'product_template_id', 'product_uom_qty', 'product_uom', 'price_unit', 'price_subtotal', 'price_total', 'tax_id', 'order_id'],
            'limit': 1500, # Limite de 1000
        }
    )
    
    for venta in ventas:
        venta['productos'] = []
        for producto in productos:
            if producto['order_id'][0] == venta['id']:
                venta['productos'].append(producto)
    
    return ventas

get_detracciones_odoo()