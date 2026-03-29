import urllib.request
import urllib.parse
url = 'http://localhost:8000/api/v1/orders/summary/monthly?' + urllib.parse.urlencode({'year': 2026, 'month': 3})
print(url)
try:
    with urllib.request.urlopen(url, timeout=5) as resp:
        print(resp.read().decode())
except Exception as e:
    print('ERROR', e)
