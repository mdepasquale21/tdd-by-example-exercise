from xUnit.src.test_case import TestCase
from xUnit.src.was_run import WasRun


class TestCaseTest(TestCase):

    def testTemplateMethod(self):
        test = WasRun("testMethod")
        test.run()
        assert (test.log == 'setUp testMethod tearDown ')


TestCaseTest("testTemplateMethod").run()
