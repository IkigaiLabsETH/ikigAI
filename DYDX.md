GitHub Full Bot:

https://github.com/CryptoWizardsNet/dydx-trading-bot.git

Google Colab DYDX Example: 

https://colab.research.google.com/drive/14B_0khx0GOApiUYnEq-cJqYpIWDnqtsv?usp=sharing

DYDX API Documentation: 

https://dydxprotocol.github.io/v3-teacher/#terms-of-service-and-privacy-policy

Useful Blog for Obtaining DYDX API Keys: 

https://docs.hummingbot.org/exchanges/dydx-perpetual/#connection

Goerli Testnet Transaction Viewer: 

https://goerli.etherscan.io/tx/0x3e80b5dd5d47f6324e8ecd14f0306440023a63b41c2199f7d0d2db70ba1b9da9

DYDX Python Examples: 

https://github.com/dydxprotocol/dydx-v3-python/blob/master/examples/orders.py

Calculation of Half Life in Python

https://www.pythonforfinance.net/2016/05/09/python-backtesting-mean-reversion-part-2/

Telegram URL

https://api.telegram.org/bot{bot_token}/sendMessage?chat_id={chat_id}&text={message}

CRON:

https://crontab.guru/
crontab -e
0 12 * * * /bin/timeout -s 2 86330 python3 dydx_bot/program/main.py > output.txt  2>&1
*/5 * * * * /bin/timeout -s 2 290 python3 dydx_bot/program/main.py > output.txt  2>&1
crontab -l