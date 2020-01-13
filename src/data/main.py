import os
import sys

# Add current module to the system path
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from data.writer import DataWriter
from data.config import Config


def main():
    '''
    Main function calls data writer
    '''
    writer = DataWriter(config=Config())
    writer.write()


if __name__ == '__main__':
    main()
