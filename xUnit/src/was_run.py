from xUnit.src.test_case import TestCase


class WasRun(TestCase):

    def __init__(self, name, mustFailSetUp=False):
        TestCase.__init__(self, name)
        self.mustFailSetUp = mustFailSetUp

    def testMethod(self):
        self.wasRun = 1
        self.log += 'testMethod '

    def testBrokenMethod(self):
        raise ZeroDivisionError

    def setUp(self):
        self.wasRun = None
        self.log = 'setUp '
        if self.mustFailSetUp:
            raise RuntimeError

    def tearDown(self):
        self.log += 'tearDown '
