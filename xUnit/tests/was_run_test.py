from xUnit.src.test_result import TestResult
from xUnit.src.was_run import WasRun

test = WasRun("testMethod")
test.setUp()
print(test.wasRun)
result = TestResult()
test.run(result)
print(test.wasRun)
print(result.summary())
