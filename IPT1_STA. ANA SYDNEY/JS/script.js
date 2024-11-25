document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            
            const targetPage = link.getAttribute("href");
            const mainContent = document.querySelector("main");

            switch (targetPage) {
                case "#home":
                    mainContent.innerHTML = `
                        <h1>Hello, I'm Sydney!</h1>
                        <div class="content">
                            <p><img src="../img/syd.png" alt="Sydney's Image">
                            Hello! My name is Sydney Roenn A. Sta. Ana, and I’m excited to share a bit about myself. 
                            <br> 
                            I am passionate about IT, and I thrive on helping others. I’m always eager to learn and grow. 
                            <br>
                            Looking forward to connecting with you!</p>
                        </div>
                    `;
                    break;

                case "#about":
                    mainContent.innerHTML = `
                        <div class="content-container">
                            <h1>About Me</h1>
                            <p>Hello! My name is Sydney Roenn A. Sta. Ana, and I am passionate about technology and helping others through IT solutions. I have a strong interest in web development and IT support. I believe in continuous learning and always strive to improve my skills. In addition to my technical expertise, I enjoy collaborating with teams and solving problems creatively.</p>
                            <p>I graduated from a specialized night high school program and am currently pursuing a college degree in Information Technology. When I'm not coding, you can find me exploring new technologies, gaming, or learning about innovative advancements in IT.</p>
                        </div>
                    `;
                    break;

                case "#services":
                    mainContent.innerHTML = `
                        <div class="content-container">
                            <h1>Services</h1>
                            <p>I offer a range of services aimed at helping you achieve your goals, whether you're an individual or a business. Here are some of the services I provide:</p>
                            <ul>
                                <li><strong>Web Design & Development</strong>: I create beautiful, user-friendly websites tailored to your needs.</li>
                                <li><strong>IT Support</strong>: Offering troubleshooting, technical advice, and IT solutions to help keep your systems running smoothly.</li>
                                <li><strong>Consulting</strong>: Providing guidance on how to leverage technology to grow your business or improve efficiency.</li>
                            </ul>
                            <p>If you're interested in any of these services, feel free to reach out!</p>
                        </div>
                    `;
                    break;

                case "#contact":
                    mainContent.innerHTML = `
                        <div class="content-container">
                            <h1>Contact Me</h1>
                            <p>If you'd like to get in touch with me, feel free to reach out via email or through my social media channels.</p>
                            <p><strong>Email:</strong> <a href="mailto:sydneyroenn@gmail.com">sydneyroenn@gmail.com</a></p>
                            <p><strong>Follow me on social media:</strong></p>
                            <ul class="social-links">
                                <li><a href="https://www.facebook.com/sydneyroenn" target="_blank">Facebook - Sydney</a></li>
                                <li><a href="https://www.instagram.com/eswaydiii/" target="_blank">Instagram - @eswaydiii</a></li>
                            </ul>
                            <p>I look forward to connecting with you!</p>
                        </div>
                    `;
                    break;
            }
        });
    });
});

