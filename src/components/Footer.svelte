<script>
	import twitterSvg from '../static/twitter.svg'
	import facebookSvg from '../static/facebook.svg'
	import youtubeSvg from '../static/youtube.svg'
	import instagramSvg from '../static/instagram.svg'
	import twitter from '../static/twitter.png'
	import facebook from '../static/facebook.png'
	import youtube from '../static/youtube.png'
	import instagram from '../static/instagram.png'
</script>

<footer class="footer">
	<div class="footer__copyright"><p>&copy; 2024 NutriSync. All rights reserved.</p></div>
	<div class="footer__links">
		<a class="footer__link" href="/privacy">
			<span>Privacy & Cookies</span>
		</a>
		<a class="footer__link" href="/terms-of-use">
			<span>Terms of use</span>
		</a>
		<a class="footer__link" href="/contact">
			<span>Contact Us</span>
		</a>
	</div>
	<div class="footer__icons">
		<object data={twitterSvg} type="image/svg+xml" aria-label="Twitter" class="footer__icon">
			<img src={twitter} alt="Twitter" class="footer__icon" />
		</object>
		<object data={facebookSvg} type="image/svg+xml" aria-label="Facebook" class="footer__icon">
			<img src={facebook} alt="Facebook" class="footer__icon" />
		</object>
		<object data={instagramSvg} type="image/svg+xml" aria-label="Instagram" class="footer__icon">
			<img src={instagram} alt="Instagram" class="footer__icon" />
		</object>
		<object data={youtubeSvg} type="image/svg+xml" aria-label="Youtube" class="footer__icon">
			<img src={youtube} alt="Youtube" class="footer__icon" />
		</object>
	</div>
</footer>

<style lang="scss">
	.footer {
		@include box(100%, 3rem);
		font-size: 1.2rem;
		color: var(--text);
		font-weight: 400;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;

		&__copyright {
			@include box(25%, 100%);
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}

		&__links {
			@include box(25%, 100%);
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding-left: 2rem;
		}

		&__link {
			color: inherit;
			margin: 0 0.8rem;

			&:not(:last-child)::after {
				content: '|';
				margin-left: 0.8rem;
				color: inherit;
				text-decoration: none;
			}
		}

		&__icons {
			@include box(50%, 100%);
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding-right: 28rem;
		}

		&__icon {
			margin: 0 0.8rem;
		}
	}
</style>
