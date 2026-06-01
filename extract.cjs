const fs = require('fs');
const html = fs.readFileSync('lovable_source.html', 'utf8');
const achievementsStart = html.indexOf('<section id="achievements"');
const experienceStart = html.indexOf('<section id="experience"');
const educationStart = html.indexOf('<section id="education"');
const contentStart = html.indexOf('<section id="content"');
const contactStart = html.indexOf('<section id="contact"');
const footerStart = html.indexOf('<footer');

if (achievementsStart > -1) {
  fs.writeFileSync('achievements_html.txt', html.slice(achievementsStart, experienceStart));
}
if (contentStart > -1) {
  fs.writeFileSync('content_html.txt', html.slice(contentStart, contactStart));
}
if (experienceStart > -1) {
  fs.writeFileSync('experience_html.txt', html.slice(experienceStart, educationStart));
}
