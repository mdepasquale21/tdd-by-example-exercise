class TestCase:

    def __init__(self, name):
        self.methodName = name

    def setUp(self):
        pass

    def run(self):
        self.setUp()
        method = getattr(self, self.methodName)
        method()
