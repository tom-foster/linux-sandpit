import logging

logging.basicConfig(filename="logging-example.log", level=logging.DEBUG)
logging.debug('This message should go the log file')
logging.warning('A warning message') #will print a message to the console
logging.info('An info message') #will not print anything