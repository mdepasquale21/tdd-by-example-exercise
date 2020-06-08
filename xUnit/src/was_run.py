from xUnit.src.test_case import TestCase


class WasRun(TestCase):

    def __init__(self, name):
        TestCase.__init__(self, name)

    def testMethod(self):
        self.wasRun = 1

    def setUp(self):
        self.wasSetUp = 1
        self.wasRun = None
