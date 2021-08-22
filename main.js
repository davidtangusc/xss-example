const comments = [
  `<script>alert('Hacked!')</script>Comment 1`,
  "Comment 2",
  "Comment 3",
];

let html = "";

comments.forEach((comment) => {
  html += `<div>${comment}</div>`;
});

// XSS vulernability
$("body").html(html);

// Sanitized HTML to prevent XSS
// let sanitizedHtml = DOMPurify.sanitize(html);
// $("body").html(sanitizedHtml);
