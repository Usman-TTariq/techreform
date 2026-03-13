const PHONE_NUMBER = "(582) 233-5015";
const PHONE_TEL = "tel:+15822335015";
const SITE_URL = "https://techreforms.com";
const LOGO_URL =
  "https://res.cloudinary.com/dtfy8a1wo/image/upload/v1773436066/Techreform_Logo_Png_pil6vv.png";

function getFirstName(fullName) {
  if (!fullName || typeof fullName !== "string") return "";
  const trimmed = fullName.trim();
  return trimmed.split(/\s+/)[0] || trimmed;
}

export function getUserConfirmationEmail(name) {
  const firstName = getFirstName(name) || "there";
  const subject =
    "Your Project Inquiry Has Been Received – Tech Reforms";

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Project Inquiry Has Been Received</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background-color:#0a0a0a;">
  <div style="max-width:600px;margin:0 auto;background-color:#0e0e0e;">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1a0a2e 0%, #0e0e0e 100%); padding:32px 20px;text-align:center;border-bottom:2px solid #7724C1;">
      <img src="${LOGO_URL}" alt="Tech Reforms" width="180" height="36" style="display: inline-block; max-height: 40px; width: auto;" />
      <div style="color:#b0b0b0;font-size:12px;margin-top:6px;letter-spacing:1.5px;text-transform:uppercase;">Top USA Digital Agency for App &amp; eCommerce</div>
    </div>

    <!-- Confirmation bar -->
    <div style="background:linear-gradient(90deg,#F74B1C,#c93a10);padding:14px 20px;text-align:center;">
      <span style="color:#ffffff;font-size:13px;font-weight:700;letter-spacing:1px;">&#10003; YOUR PROJECT INQUIRY HAS BEEN RECEIVED</span>
    </div>

    <!-- Banner -->
    <div style="background:linear-gradient(135deg,#1a0a2e,#2d1250,#0e0e0e);padding:28px 20px;text-align:center;">
      <div style="color:#b0b0b0;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;">We Reinvent Business Via</div>
      <div style="color:#ffffff;font-size:22px;font-weight:900;letter-spacing:2px;text-transform:uppercase;">Digital Transformation</div>
    </div>

    <!-- Main content -->
    <div style="background-color:#161616;padding:32px 28px;border-left:1px solid #222;border-right:1px solid #222;">
      <p style="color:#ffffff;font-size:18px;font-weight:700;margin:0 0 20px 0;">Hi ${firstName},</p>
      <p style="color:#cccccc;font-size:15px;line-height:1.7;margin:0 0 16px 0;">
        Thank you for reaching out to Tech Reforms. We've received your inquiry and a member of our team will be in touch with you within <strong style="color:#ffffff;">3 minutes on average</strong> — but no later than <strong style="color:#F74B1C;">24 hours</strong>.
      </p>
      <p style="color:#cccccc;font-size:15px;line-height:1.7;margin:0 0 28px 0;">
        Whether you're looking to build a mobile app, launch an eCommerce platform, scale your team through staff augmentation, or develop a custom enterprise solution — we're ready to turn your vision into a scalable digital product.
      </p>

      <!-- What Happens Next -->
      <div style="border-left:3px solid #F74B1C;padding-left:16px;margin:28px 0;">
        <div style="color:#F74B1C;font-size:12px;font-weight:700;letter-spacing:1.5px;margin-bottom:18px;">WHAT HAPPENS NEXT</div>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="vertical-align:top;padding-bottom:16px;width:42px;">
              <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#F74B1C,#c93a10);color:#fff;text-align:center;line-height:30px;font-size:14px;font-weight:700;">1</div>
            </td>
            <td style="padding-bottom:16px;background-color:#1e1e1e;border-radius:8px;padding:14px;">
              <strong style="color:#ffffff;font-size:14px;">We Schedule a Call at Your Convenience</strong><br/>
              <span style="color:#999;font-size:13px;line-height:1.6;">A Tech Reforms specialist will reach out to understand your project goals, timeline, and technical requirements.</span>
            </td>
          </tr>
          <tr><td colspan="2" style="height:8px;"></td></tr>
          <tr>
            <td style="vertical-align:top;padding-bottom:16px;width:42px;">
              <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;text-align:center;line-height:30px;font-size:14px;font-weight:700;">2</div>
            </td>
            <td style="padding-bottom:16px;background-color:#1e1e1e;border-radius:8px;padding:14px;">
              <strong style="color:#ffffff;font-size:14px;">Discovery &amp; Consulting Meeting</strong><br/>
              <span style="color:#999;font-size:13px;line-height:1.6;">We deep-dive into your project needs, identify the right tech stack, team structure, and delivery approach for your business.</span>
            </td>
          </tr>
          <tr><td colspan="2" style="height:8px;"></td></tr>
          <tr>
            <td style="vertical-align:top;width:42px;">
              <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#7724C1,#5b1a9e);color:#fff;text-align:center;line-height:30px;font-size:14px;font-weight:700;">3</div>
            </td>
            <td style="background-color:#1e1e1e;border-radius:8px;padding:14px;">
              <strong style="color:#ffffff;font-size:14px;">We Prepare a Custom Proposal</strong><br/>
              <span style="color:#999;font-size:13px;line-height:1.6;">You'll receive a detailed proposal with scope, timeline, team structure, and investment — no vague quotes, no surprises.</span>
            </td>
          </tr>
        </table>
      </div>

      <!-- CTA Button -->
      <div style="text-align:center;margin:32px 0 14px 0;">
        <a href="${PHONE_TEL}" style="display:inline-block;background:linear-gradient(90deg,#F74B1C,#c93a10);color:#ffffff;font-size:14px;font-weight:800;letter-spacing:1px;text-decoration:none;padding:16px 40px;border-radius:30px;text-transform:uppercase;">Call a Specialist Now</a>
      </div>
      <p style="text-align:center;color:#888;font-size:12px;margin:0 0 28px 0;">
        Prefer to talk now? Call us: <a href="${PHONE_TEL}" style="color:#F74B1C;font-weight:700;text-decoration:none;">${PHONE_NUMBER}</a> &nbsp;|&nbsp; Avg. Answer Time: 3 Minutes.
      </p>
    </div>

    <!-- Stats -->
    <div style="background:linear-gradient(135deg,#1a0a2e,#0e0e0e);padding:24px 16px;text-align:center;border-top:1px solid #333;border-bottom:1px solid #333;">
      <table style="width:100%;border-collapse:collapse;max-width:560px;margin:0 auto;">
        <tr>
          <td style="text-align:center;padding:8px 6px;vertical-align:top;">
            <div style="color:#F74B1C;font-size:18px;font-weight:800;">98%</div>
            <div style="color:#888;font-size:10px;letter-spacing:0.5px;margin-top:4px;text-transform:uppercase;">Customer Satisfaction</div>
          </td>
          <td style="text-align:center;padding:8px 6px;vertical-align:top;">
            <div style="color:#F74B1C;font-size:18px;font-weight:800;">1.5K+</div>
            <div style="color:#888;font-size:10px;letter-spacing:0.5px;margin-top:4px;text-transform:uppercase;">Projects Delivered</div>
          </td>
          <td style="text-align:center;padding:8px 6px;vertical-align:top;">
            <div style="color:#F74B1C;font-size:18px;font-weight:800;">3+</div>
            <div style="color:#888;font-size:10px;letter-spacing:0.5px;margin-top:4px;text-transform:uppercase;">Years Track Record</div>
          </td>
          <td style="text-align:center;padding:8px 6px;vertical-align:top;">
            <div style="color:#F74B1C;font-size:18px;font-weight:800;">3 MIN</div>
            <div style="color:#888;font-size:10px;letter-spacing:0.5px;margin-top:4px;text-transform:uppercase;">Avg. Answer Time</div>
          </td>
        </tr>
      </table>
    </div>

    <!-- Services bar -->
    <div style="background-color:#7724C1;padding:14px 20px;text-align:center;">
      <div style="color:#ffffff;font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Our Core Services</div>
      <div style="color:#ffffff;font-size:12px;font-weight:600;">Mobile Apps &nbsp;&middot;&nbsp; eCommerce &nbsp;&middot;&nbsp; Staff Augmentation &nbsp;&middot;&nbsp; Game Dev &nbsp;&middot;&nbsp; WRM &nbsp;&middot;&nbsp; HRMS</div>
    </div>

    <!-- Footer -->
    <div style="background-color:#161616;padding:28px 24px;border-top:1px solid #222;">
      <p style="color:#cccccc;font-size:14px;margin:0 0 4px 0;">Best regards,</p>
      <p style="color:#ffffff;font-size:15px;font-weight:700;margin:0 0 2px 0;">The Tech Reforms Team</p>
      <p style="color:#888;font-size:12px;margin:0 0 18px 0;">Digital Transformation Specialists</p>
      <p style="color:#888;font-size:12px;margin:0 0 4px 0;">
        <span style="margin-right:6px;">&#9993;</span><a href="mailto:info@techreforms.com" style="color:#cccccc;text-decoration:none;">info@techreforms.com</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span style="margin-right:6px;">&#127760;</span><a href="${SITE_URL}" style="color:#cccccc;text-decoration:none;">techreforms.com</a>
      </p>
      <p style="color:#888;font-size:12px;margin:4px 0 0 0;">
        <span style="margin-right:6px;">&#128205;</span>811 Wilshire Boulevard, Los Angeles, CA 90017
      </p>
    </div>

    <!-- Legal footer -->
    <div style="background-color:#0a0a0a;padding:18px 20px;text-align:center;border-top:1px solid #1e1e1e;">
      <p style="color:#666;font-size:11px;margin:0 0 8px 0;">You're receiving this email because you submitted an inquiry at techreforms.com.</p>
      <p style="color:#666;font-size:11px;margin:0;">
        <a href="${SITE_URL}/privacy-policy" style="color:#888;text-decoration:underline;">Privacy Policy</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="${SITE_URL}/terms" style="color:#888;text-decoration:underline;">Terms &amp; Conditions</a>
      </p>
      <p style="color:#555;font-size:11px;margin:10px 0 0 0;">&copy; 2026 Tech Reforms. All Rights Reserved.</p>
    </div>

  </div>
</body>
</html>
  `.trim();

  const text = `
Your Project Inquiry Has Been Received – Tech Reforms

Hi ${firstName},

Thank you for reaching out to Tech Reforms. We've received your inquiry and a member of our team will be in touch with you within 3 minutes on average — but no later than 24 hours.

Whether you're looking to build a mobile app, launch an eCommerce platform, scale your team through staff augmentation, or develop a custom enterprise solution — we're ready to turn your vision into a scalable digital product.

WHAT HAPPENS NEXT
1. We Schedule a Call at Your Convenience — A Tech Reforms specialist will reach out to understand your project goals, timeline, and technical requirements.
2. Discovery & Consulting Meeting — We deep-dive into your project needs, identify the right tech stack, team structure, and delivery approach for your business.
3. We Prepare a Custom Proposal — You'll receive a detailed proposal with scope, timeline, team structure, and investment — no vague quotes, no surprises.

Call a specialist now: ${PHONE_NUMBER}
Prefer to talk now? Call us: ${PHONE_NUMBER} | Avg. Answer Time: 3 Minutes.

98% Customer Satisfaction | 1.5K+ Projects Delivered | 3+ Years Track Record | 3 MIN Avg. Answer Time

Our Core Services: Mobile Apps | eCommerce | Staff Augmentation | Game Dev | WRM | HRMS

Best regards,
The Tech Reforms Team
Digital Transformation Specialists
info@techreforms.com | techreforms.com
811 Wilshire Boulevard, Los Angeles, CA 90017

Privacy Policy: ${SITE_URL}/privacy-policy
Terms & Conditions: ${SITE_URL}/terms
© 2026 Tech Reforms. All Rights Reserved.
  `.trim();

  return { subject, html, text };
}
