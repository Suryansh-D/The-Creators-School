document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Redirecting to course detail pages
    document.querySelectorAll('.know-more-btn').forEach(button => {
        button.addEventListener('click', function () {
            const courseSection = this.closest('.course-section').id;
            const coursePages = {
                "video-editing": "courses/video-editing.html",
                "content-writing": "courses/content-writing.html",
                "web-dev": "courses/web-dev.html"
            };
            if (coursePages[courseSection]) {
                window.location.href = coursePages[courseSection];
            }
        });
    });

    // Redirect to all courses page
    document.querySelector('#explore-btn').addEventListener('click', function() {
        window.location.href = 'https://suryanshdubey8813.graphy.com/t/allcourses'; // Replace with your website URL
    });

    // Redirect to community (Telegram channel)

    // Handle assets section button click
    // You may need to add an assets button to your HTML for this to work
    document.querySelector('.assets-btn')?.addEventListener('click', function() {
        window.location.href = 'https://drive.google.com/your_assets_link'; // Replace with your Google Drive link or relevant URL
    });

    // Redirect to hiring form
    // You may need to add a hire button to your HTML for this to work
    document.querySelector('.hire-btn')?.addEventListener('click', function() {
        window.location.href = 'https://forms.gle/your_google_form_link'; // Replace with your Google Form link
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const currentlyActive = document.querySelector('.faq-answer.active');

            // Close the currently open FAQ if it’s not the one clicked
            if (currentlyActive && currentlyActive !== answer) {
                currentlyActive.classList.remove('active');
                currentlyActive.style.display = 'none';
            }

            // Toggle the clicked FAQ
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                answer.style.display = 'none';
            } else {
                answer.classList.add('active');
                answer.style.display = 'block';
            }
        });
    });
});

