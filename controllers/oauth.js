const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: 'http://www.example.com/auth/google/callback',
		},
		function (accessToken, refreshToken, profile, cb) {
			User.findOrCreate({ googleId: profile.id }, function (err, user) {
				return cb(err, user)
			})
		}
	)
)

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (obj, done) {
  done(null, obj)
})