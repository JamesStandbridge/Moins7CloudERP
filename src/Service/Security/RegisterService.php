<?php
namespace App\Service\Security;

use Doctrine\ORM\EntityManagerInterface;
use App\Service\AbstractService;
use App\Service\Location\AddressManager;

use App\ErrorHandler\API\Exception\MissingParameterException;

use App\Entity\Member;

class RegisterService extends AbstractService {
    
	private $addressManager;

	public function __construct(AddressManager $addressManager, EntityManagerInterface $em) 
	{
		$this->addressManager = $addressManager;
        parent::__construct($em);
	}

    public function register(array $memberData) 
    {
        $member = new Member();
        if(array_key_exists("username", $memberData)) {
            $member->setUsername($memberData["username"]);
        } else {
            throw new \MissingParameterException(sprintf("username field is required"));
        }  

        if(array_key_exists("firstname", $memberData)) {
            $member->setFirstname($memberData["firstname"]);
        } else {
            throw new \MissingParameterException(sprintf("firstname field is required"));
        }  

        if(array_key_exists("lastname", $memberData)) {
            $member->setLastname($memberData["lastname"]);
        } else {
            throw new \MissingParameterException(sprintf("lastname field is required"));
        }  

        if(array_key_exists("email", $memberData)) {
            $member->setEmail($memberData["email"]);
        } else {
            throw new \MissingParameterException(sprintf("email field is required"));
        }  

        if(array_key_exists("password", $memberData)) {
            $member->setPlainPassword($memberData["password"]);
        } else {
            throw new \MissingParameterException(sprintf("password field is required"));
        }  
        
        $member->setEnabled(true);
        
        if(array_key_exists("roles", $memberData)) {
            foreach($memberData["roles"] as $role) {
            	$member->addRole($role);
            }
        } else {
            throw new \MissingParameterException(sprintf("roles field is required"));
        }  

        if(array_key_exists("address", $memberData)) {
            $address = $this->addressManager->createAddress(
                $memberData["address"]["street"],
                $memberData["address"]["city"],
                $memberData["address"]["zipcode"],
                $memberData["address"]["country"],
            );

            $member->setAddress($address);            
        } else {
            throw new \MissingParameterException(sprintf("Address field is required"));
        }

        $this->em->persist($member);
        $this->em->flush();

        return $member;
    }
}