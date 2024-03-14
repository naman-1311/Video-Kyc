import cv2
import pytesseract
from gtts import gTTS
from pydub import AudioSegment
from pydub.playback import play
from PIL import Image


# Function to capture live photograph
def capture_photo():
    # Use OpenCV to capture live video stream from webcam
    cap = cv2.VideoCapture(0)
    while True:
        ret, frame = cap.read()
        # Display the live video stream
        cv2.imshow('Capture Photo', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            # Save the captured photo
            cv2.imwrite('live_photo.jpg', frame)
            break
    # Release the camera capture object
    cap.release()
    cv2.destroyAllWindows()

# Function to extract text from image
def extract_text_from_image(image_path):
    image = Image.open('live_photo.jpg')

# Perform OCR using PyTesseract
    text = pytesseract.image_to_string(image)

    return text 
    
    

# Function to convert text to speech


# Function to guide user through KYC process
def kyc_process():
    print("Welcome to the online interactive video KYC process!")
    print("Let's begin with capturing your live photograph.")
    capture_photo()

    
    print("Great! Now, let's collect some basic details.")
    # Conversational data collection
    name = input("Please enter your name: ")
    dob = input("Please enter your date of birth (YYYY-MM-DD): ")
    address = input("Please enter your address: ")
    pan_aadhaar = input("Please enter your PAN card/Aadhaar number: ")
    income_range = input("Please select your income range: ")
    employment_type = input("Please select your type of employment: ")
    print("Thank you for providing your information.")
    print("We will review your details and proceed with the verification process.")
    

    # Extract text from the captured photo
    extracted_text = extract_text_from_image('live_photo.jpg')
    print(extracted_text)

    
    
# Main function
if __name__ == "__main__":
    kyc_process()