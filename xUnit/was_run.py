class WasRun:

    def __init__(self, methodName):
        self.wasRun = None
        self.methodName = methodName

    def testMethod(self):
        self.wasRun = 1

    def run(self):
        method = getattr(self, self.methodName)
        method()
