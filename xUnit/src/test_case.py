from xUnit.src.test_result import TestResult


class TestCase:

    def __init__(self, name):
        self.methodName = name

    def setUp(self):
        pass

    def run(self):
        result = TestResult()
        result.testStarted()
        self.setUp()
        method = getattr(self, self.methodName)
        method()
        self.tearDown()
        return result

    def tearDown(self):
        pass
