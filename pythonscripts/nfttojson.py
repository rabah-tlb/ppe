import requests
import json

# Renseignez l'adresse de votre NFT
nft_address = '0x1234567890abcdef'

# Requête à l'API OpenSea
response = requests.get(f'https://api.opensea.io/api/v1/asset/{nft_address}')

# Vérification du code de réponse HTTP (200 OK signifie que tout s'est bien passé)
if response.status_code != 200:
    raise ValueError('Impossible de récupérer les données du NFT')

# Conversion de la réponse en JSON
nft_json = json.loads(response.content)

# Enregistrement du JSON dans un fichier
with open('nft.json', 'w') as f:
    json.dump(nft_json, f, indent=4)

# Confirmation de l'enregistrement
print('Le fichier nft.json a été créé avec succès !')
