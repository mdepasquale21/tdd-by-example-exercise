class TestCase:

    def __init__(self, name):
        self.methodName = name

    def setUp(self):
        pass

    def run(self, result):
        result.testStarted()
        self.setUp()
        try:
            method = getattr(self, self.methodName)
            method()
        except ZeroDivisionError:
            result.testFailed()
        self.tearDown()
        return result

    def tearDown(self):
        pass
