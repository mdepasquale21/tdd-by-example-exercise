class TestResult:

    def __init__(self):
        self.runCount = 0
        self.errorCount = 0
        self.setUpError = False

    def testStarted(self):
        self.runCount += 1

    def testFailed(self):
        self.errorCount += 1

    def brokenSetUp(self):
        self.setUpError = True

    def summary(self):
        if self.setUpError:
            return 'Error during setUp!'
        else:
            return f'{self.runCount} run, {self.errorCount} failed'
