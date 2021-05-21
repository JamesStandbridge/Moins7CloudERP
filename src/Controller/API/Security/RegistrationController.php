<?php

namespace App\Controller\API\Security;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Service\Security\RegisterService;
use App\ErrorHandler\API\Exception\MissingParameterException;


class RegistrationController extends AbstractController
{

    /**
     * @Route("/pub/register", name="pub_register", methods={"POST"})
     * @param  Request $request
     * @return Response
     */
    public function register(Request $request, RegisterService $service) : Response
    {
        $content = json_decode($request->getContent(), true);

        try {
            $member = $service->register($content);
        } catch (\MissingParameterException $e) {
            return $this->json([
                'error' => $e->getMessage()
            ], 400);            
        } 
        
        return $this->json([
            'member' => $member
        ], 200);
    }
}


// $content = json_decode($request->getContent(), true);
// $from = $request->query->get('from');