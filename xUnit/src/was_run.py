from xUnit.src.test_case import TestCase


class WasRun(TestCase):

    def __init__(self, name):
        TestCase.__init__(self, name)

    def testMethod(self):
        self.wasRun = 1
        self.log += 'testMethod '

    def setUp(self):
        self.wasRun = None
        self.log = 'setUp '

    def tearDown(self):
        self.log += 'tearDown '