class TestCase:

    def __init__(self, name):
        self.methodName = name

    def setUp(self):
        pass

    def run(self, result):
        result.testStarted()
        try:
            self.setUp()
        except RuntimeError:
            result.brokenSetUp()
            self.tearDown()
            return result
        try:
            method = getattr(self, self.methodName)
            method()
        except ZeroDivisionError:
            result.testFailed()
        self.tearDown()
        return result

    def tearDown(self):
        pass
