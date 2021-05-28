<?php
namespace App\Controller\API\Security;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Service\Security\RegisterService;
use App\ErrorHandler\API\Exception\MissingParameterException;


class UserController extends AbstractController
{
    /**
     * @Route("/api/user/data", name="api_get_user_data", methods={"GET"})
     */
    public function getUser()
    {
    dd();      
    }
}