from xUnit.src.test_case import TestCase
from xUnit.src.test_result import TestResult
from xUnit.src.was_run import WasRun


class TestCaseTest(TestCase):

    def testTemplateMethod(self):
        test = WasRun("testMethod")
        test.run()
        assert (test.log == 'setUp testMethod tearDown ')

    def testResult(self):
        test = WasRun("testMethod")
        result = test.run()
        assert (result.summary() == '1 run, 0 failed')

    def testFailedResult(self):
        test = WasRun("testBrokenMethod")
        result = test.run()
        assert (result.summary() == '1 run, 1 failed')

    def testFailedResultFormatting(self):
        result = TestResult()
        result.testStarted()
        result.testFailed()
        assert (result.summary() == '1 run, 1 failed')


TestCaseTest("testTemplateMethod").run()
TestCaseTest("testResult").run()
# TestCaseTest("testFailedResult").run()
TestCaseTest("testFailedResultFormatting").run()
