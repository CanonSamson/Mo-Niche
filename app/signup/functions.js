export const signupWithEmailandPassword = async (formData) => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        console.log("Signup successful!");
      } else {
        throw new Error(`Signup failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      throw error; // Re-throw the error to propagate it to the calling code
    }
  };
  