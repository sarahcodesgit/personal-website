Create a portfolio using CSS, HTML, VS, GitHub, and Vercel to showcase education, skills, and projects. Context of this page includes information from my resume. 

---

### **1. Folder Structure Overview**
- **`Porto/`**: This is the root directory of the project.
  - **`assets/`**: This folder contains all static assets, such as stylesheets and images.
    - **`css/`**: This folder contains Tailwind CSS file.
      - **`tailwind.css`**: This is the stylesheet where Tailwind CSS is likely configured and used to style your website.
    - **`image/`**: This folder contains all the images used in the website.
      - `home-img.png`: The introductory image on the homepage.
      - `logo.jpg`: The logo displayed in the navigation bar.
  - **`index.html`**: This is the main HTML file, the entry point for the website and where context is displayed.

---

### **2. What Happens in This Structure**

#### **`index.html`**
- **Purpose**: Acts as the main page of the website. When someone visits the site, this file is loaded first.
- **Usage**: 
  - It links to the `tailwind.css` file for styling.
  - It uses the images in the `assets/image/` folder to display visuals like the logo and branding.

#### **`assets/css/tailwind.css`**
- **Purpose**: Contains Tailwind CSS classes and possibly custom configurations (if you’ve added any customizations).
- **Usage**: 
  - Tailwind provides utility classes for styling elements in HTML.
  - This file is linked to `index.html` like this:
    ```html
    <link rel="stylesheet" href="assets/css/tailwind.css">
    ```

#### **`assets/image/`**
- **Purpose**: Holds all the images used in the project.
- **Usage**:
  - Images are referenced in the `index.html` file using relative paths.
  - Example:
    ```html
    <img src="assets/image/navbar-logo.png" alt="Logo">
    ```

---

### **3. Key Things to Note**
- **Linking Assets**: 
  - All paths `index.html` are relative. For example:
    - `assets/css/tailwind.css` references the CSS file.
    - `assets/image/home-img.png` references the image file for the homepage.
  - Always ensure the paths are correct relative to the `index.html` file.
  
- **Tailwind CSS**:
  - Tailwind is used to apply styles throughout the project.
  - Instead of writing custom CSS classes, you can use Tailwind utility classes directly in the HTML. For example:
    ```html
    <div class="bg-blue-600 text-white p-4">
        This is a styled div using Tailwind CSS.
    </div>
    ```

- **Dynamic Content (optional)**:
  - If you want to dynamically add sections like `Home`, `About`, and `Projects`, you’ll need a JavaScript file (e.g., `app.js`) to handle navigation and content injection.

---

### **Next Steps**
1. **Ensure Asset Linking**:
   - Check if all assets (CSS and images) are linked correctly in `index.html`.
   - Example:
     ```html
     <link rel="stylesheet" href="assets/css/tailwind.css">
     <img src="assets/image/navbar-logo.png" alt="Logo">
     ```

2. **Tailwind Functionality**:
   - If Tailwind is not yet configured properly, ensure that Tailwind CSS file is compiled and ready for use. For example:
     - If using a CDN:
       ```html
       <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
       ```
     - If using custom Tailwind, ensure it’s processed via PostCSS.

3. **Dynamic Rendering** (Optional):
   - Add `app.js` to handle navigation dynamically. This will require creating files like `home.js`, `about.js`, and `projects.js`.

4. **Testing**:
   - Open your project in a browser via a local server (VS Code Live Server) to verify the file paths and styles.


5. **Install Vercel CLI (Optional)**
1. Install Node.js if it's not already installed.
2. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

6. **Deploy Project Using the Vercel Web Interface**
1. **Sign Up/Log In**:
   - Go to [Vercel](https://vercel.com/) and create an account if you don’t already have one.
   - Log in using your preferred method (GitHub, GitLab, Bitbucket, etc.).

2. **Create a New Project**:
   - Click **"New Project"** on the Vercel dashboard.

3. **Import Git Repository**:
   - If the project is in a GitHub repository, you can link it directly.
   - Otherwise, use the **"Deploy manually"** option by dragging and dropping project folder.

4. **Upload Your Files**:
   - Drag and drop `Porto/` folder into the deployment window.
   - Vercel will automatically detect the `index.html` file as the entry point.

5. **Configure Settings** (Optional):
   - Set the framework preset to `Static` (Vercel automatically selects this if you’re deploying a static website).
   - Click **"Deploy"**.

6. **Deployment**:
   - Vercel will build and deploy your project.
   - Once completed, you’ll receive a unique URL (e.g., `https://your-project-name.vercel.app`).


7. **Update Your Deployment**
If you make changes to your project:
- Upload updated files using the web interface.
- Or, if using CLI:
  ```bash
  vercel --prod
  ```

8. **Optional: Customize Domain**
1. **Add a Custom Domain**:
   - In the Vercel dashboard, go to your project’s settings.
   - Click **"Domains"** and add your custom domain (e.g., `www.yourdomain.com`).

2. **Set Up DNS**:
   - Update your DNS settings to point to Vercel (instructions provided in the dashboard).

10. **Verify Your Deployment**
- Visit the provided URL to confirm your project is live.
- Test all links and assets to ensure everything is working as expected.

