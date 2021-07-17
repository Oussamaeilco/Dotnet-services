<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite118aa01c263d017679d2a96db8c1857
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite118aa01c263d017679d2a96db8c1857::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite118aa01c263d017679d2a96db8c1857::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite118aa01c263d017679d2a96db8c1857::$classMap;

        }, null, ClassLoader::class);
    }
}
