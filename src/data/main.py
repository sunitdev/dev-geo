from writer import DataWriter
from config import Config


def main():
    '''
    Main function calls data writer
    '''
    writer = DataWriter(config=Config())
    writer.write()


if __name__ == 'main':
    main()
