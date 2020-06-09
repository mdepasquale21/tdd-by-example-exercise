from xUnit.src.test_case import TestCase
from xUnit.src.test_result import TestResult
from xUnit.src.test_suite import TestSuite
from xUnit.src.was_run import WasRun


class TestCaseTest(TestCase):

    def setUp(self):
        self.result = TestResult()

    def testTemplateMethod(self):
        test = WasRun("testMethod")
        test.run(self.result)
        assert (test.log == 'setUp testMethod tearDown ')

    def testResult(self):
        test = WasRun("testMethod")
        test.run(self.result)
        assert (self.result.summary() == '1 run, 0 failed')

    def testFailedResult(self):
        test = WasRun("testBrokenMethod")
        test.run(self.result)
        assert (self.result.summary() == '1 run, 1 failed')

    def testFailedResultFormatting(self):
        self.result.testStarted()
        self.result.testFailed()
        assert (self.result.summary() == '1 run, 1 failed')

    def testErrorDuringSetUp(self):
        test = WasRun("testMethod", True)
        test.run(self.result)
        assert (self.result.summary() == 'Error during setUp!')

    def testSuiteTest(self):
        suite = TestSuite()
        suite.add(WasRun("testMethod"))
        suite.add(WasRun("testBrokenMethod"))
        suite.run(self.result)
        assert (self.result.summary() == '2 run, 1 failed')


suite = TestSuite()
suite.add(TestCaseTest("testTemplateMethod"))
suite.add(TestCaseTest("testResult"))
suite.add(TestCaseTest("testFailedResult"))
suite.add(TestCaseTest("testFailedResultFormatting"))
suite.add(TestCaseTest("testErrorDuringSetUp"))
suite.add(TestCaseTest("testSuiteTest"))
result = TestResult()
suite.run(result)
print(result.summary())
