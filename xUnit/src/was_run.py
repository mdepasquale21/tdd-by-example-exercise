from xUnit.src.test_case import TestCase


class WasRun(TestCase):

    def __init__(self, name):
        self.wasSetUp = None
        self.wasRun = None
        TestCase.__init__(self, name)

    def testMethod(self):
        self.wasRun = 1

    def setUp(self):
        self.wasSetUp = 1
