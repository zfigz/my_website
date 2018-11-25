import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
	<footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
		<ul class="icons">
			<li>
				<a href="https://github.com/ianhundere" target="_blank" class="icon fa-github">
					<span class="label">GitHub</span>
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/ian-hundere/" target="_blank" class="icon fa-linkedin">
					<span class="label">Linked-In</span>
				</a>
			</li>
			<li>
				<a
					href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=ianhundere@gmail.com"
					target="_blank"
					class="icon fa-envelope"
				>
					<span class="label">Email</span>
				</a>
			</li>
		</ul>
		<p className="copyright">
			&copy; Ian Hundere. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with:{' '}
			<a href="https://www.gatsbyjs.org/">Gatsby.js</a>
		</p>
	</footer>
);

Footer.propTypes = {
	timeout: PropTypes.bool
};

export default Footer;
