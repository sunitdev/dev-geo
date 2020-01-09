import os
import sys

# DIR constants
BASE_DIR = os.path.abspath(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
SRC_MODULE_DIR = os.path.join(BASE_DIR, 'src')
TEST_RAW_DIR = os.path.join(BASE_DIR, 'tests', 'raw')

# Hack to run pytest outside the application module
sys.path.append(SRC_MODULE_DIR)
