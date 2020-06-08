class TestCase:

    def __init__(self, name):
        self.methodName = name

    def run(self):
        method = getattr(self, self.methodName)
        method()
