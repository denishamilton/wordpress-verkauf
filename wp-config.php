<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hamden_dbitnverkauf' );

/** Database username */
define( 'DB_USER', 'hamden_dbitnverkauf' );

/** Database password */
define( 'DB_PASSWORD', 'mF7ug_6^L9' );

/** Database hostname */
define( 'DB_HOST', 'hamden.mysql.tools' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Wv1gav3J{mQ$a+!IxN0DmIl~X3zg8/w9?&c1.56Eq#cCK5D{a yjW{fqt3aOU-0Q' );
define( 'SECURE_AUTH_KEY',  ' 6ETy1~PFg~Q5-qEV;4*T 8/uabi%f(T4/^It~mXr0KUv&YIYsXMZLoNjdVjq}i(' );
define( 'LOGGED_IN_KEY',    'f*lG[T_[~tv5#ch4:,/_+aX>Bt7$1|@igV(7({Ylt?S<wX(Zn&koRX 7~p1-Jyvh' );
define( 'NONCE_KEY',        'l8[=P:bao(:l+-}G(&Pwb43^CI:+7/J.0r_ilXv_)3VOUCjU2v%h$g.hM_%D@y$(' );
define( 'AUTH_SALT',        '`_;L;^;UfR2V3%uKuV>J;#tEit`R3<S.y@5cO+lxC5m`%9,odPB_YJ`|:k6*X;Ob' );
define( 'SECURE_AUTH_SALT', 'woV>F16{Zuj&mac&y>p<6~Dq4*[s=5#v=*Zl_ng] .pCuhwWCHgz`B8gLp$=5biO' );
define( 'LOGGED_IN_SALT',   '/P/z?xPdCtW} YQbI+hd#wl<jwD8xybqhLVX$$hS;]E]K_8Q0Z!`OD/_q#3OYdd>' );
define( 'NONCE_SALT',       '[g+eA|(abg99y,3tU,HKKAn?*../~eJ8uGWR)BN%^(bq`_cy?7MuC`qC(AKK+NdY' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
