from xUnit.src.was_run import WasRun

test = WasRun("testMethod")
test.setUp()
print(test.wasRun)
test.run()
print(test.wasRun)
