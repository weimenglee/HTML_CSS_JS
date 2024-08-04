from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit_form', methods=['POST'])
def submit_form():
    name = request.form.get('name')
    email = request.form.get('email')
    
    # Print the form data to the console
    print(f"Received name: {name}")
    print(f"Received email: {email}")
    
    # Return a JSON response
    return jsonify({"message": "Form submitted successfully", "name": name, "email": email})

if __name__ == '__main__':
    app.run(debug=True)
