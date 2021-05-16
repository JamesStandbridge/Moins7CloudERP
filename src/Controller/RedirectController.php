<?php

/**
 * author: JamesStandbridge
 * date: 24/01/2021
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RedirectController extends AbstractController
{
    /**
     * @Route("/", name="entry")
     */
    public function homepage(): Response
    {
        return $this->render('react_app/appEntryPoint.html.twig');
    }


    /**
     * @Route("/register", name="register")
     */
    public function registerRoute(): Response
    {
        return $this->render('react_app/appEntryPoint.html.twig');
    }


    /**
     * @Route("/login", name="login")
     */
    public function login(): Response
    {
        return $this->render('react_app/appEntryPoint.html.twig');
    }
}
