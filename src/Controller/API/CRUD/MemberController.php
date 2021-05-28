<?php

namespace App\Controller\API\CRUD;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Repository\MemberRepository;

class MemberController extends AbstractController
{

    /**
     * @Route("/api/members", name="api_get_all_members", methods={"GET"})
     * @param  MemberRepository $repo
     * @return Response
     */
    public function getAll(MemberRepository $repo) : Response
    {
        $members = $repo->findAll();

        return $this->json([
            'members' => $members
        ], 200, [], ["groups" => "member:read:all"]);
    }
}
