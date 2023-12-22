from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

# Start the WebDriver
driver = webdriver.Chrome()

# Open the registration form page
driver.get("http://localhost:3001")

# Function to find an element by its ID
def findId(id):
    return driver.find_element(By.ID, id)

def clear(id):
    findId(id).clear()

def clearRegister():
    findId("name").clear()
    findId("email").clear()
    findId("phoneNumber").clear()
    findId("password").clear()
    findId("confirmPassword").clear()

def clearLogin():
    findId("email").clear()
    findId("password").clear()    

#Register Case 1 : Submit Empty Data
findId("form-register").submit()
time.sleep(3) 

#Register Case 2 : Submit Invalid and Valid Email format
findId("name").send_keys("Asep ABC")
time.sleep(0.75)
findId("email").send_keys("Asepabcgmail.com")
time.sleep(0.75)
findId("form-register").submit()
time.sleep(2)
clear("email")
findId("email").send_keys("Asepabc@gmail.com")
time.sleep(0.75)
findId("form-register").submit()
time.sleep(2)

#Register Case 3 : Submit Invalid and Valid Phone Number format
findId("phoneNumber").send_keys("abcdefghij")
time.sleep(0.75) 
findId("form-register").submit()
time.sleep(2)
clear("phoneNumber")
findId("phoneNumber").send_keys("08228292829282")
findId("form-register").submit()
time.sleep(2)

#Register Case 4 : Password and Confirmation Password match validation
findId("password").send_keys("asep123")
time.sleep(0.75) 
findId("confirmPassword").send_keys("asep1234")
time.sleep(0.75) 
findId("form-register").submit()
time.sleep(2) 
clear("confirmPassword")
findId("confirmPassword").send_keys("asep123")
findId("form-register").submit()
time.sleep(2)
clearRegister()

#Register Case 5 : Submit Valid Data
findId("name").send_keys("Asep ABC")
time.sleep(0.75) 
findId("email").send_keys("Asepabc@gmail.com")
time.sleep(0.75) 
findId("phoneNumber").send_keys("08228292829282")
time.sleep(0.75) 
findId("password").send_keys("asep123")
time.sleep(0.75) 
findId("confirmPassword").send_keys("asep123")
time.sleep(0.75) 
findId("form-register").submit()
time.sleep(5)


#Login Case 1: Submit Empty Data
findId("link-login").click()
time.sleep(2)

findId("form-login").submit()
time.sleep(3) 

#Login Case 2: Submit Valid and Invalid Email Format
findId("email").send_keys("Asepabcgmail.com")
findId("form-login").submit()
time.sleep(0.75) 
clear("email")
findId("email").send_keys("Asepabc@gmail.com")
findId("form-login").submit()
time.sleep(2)
clear("email")

#Login Case 3: Submit with email that never beeen registered
findId("email").send_keys("salsa2@gmail.com")
time.sleep(0.75) 
findId("password").send_keys("asep123")
findId("form-login").submit()
time.sleep(2)
clearLogin()

#Login Case 3: Submit with wrong password credential
findId("email").send_keys("Asepabc@gmail.com")
time.sleep(0.75) 
findId("password").send_keys("asep1234")
findId("form-login").submit()
time.sleep(2)
clearLogin()

#Login Case 3: Submit with valid credential
findId("email").send_keys("Asepabc@gmail.com")
time.sleep(0.75) 
findId("password").send_keys("asep123")
findId("form-login").submit()
time.sleep(6)

findId("logout").click()
time.sleep(3)

driver.quit()