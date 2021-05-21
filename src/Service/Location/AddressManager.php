<?php
namespace App\Service\Location;

use App\Service\AbstractService;

use App\Entity\Address;

class AddressManager extends AbstractService {
    
    /**
     * Create new Address
     * @param  string $street  
     * @param  string $city    
     * @param  string $zipcode 
     * @param  string $country 
     * @return Address         
     */
    public function createAddress(?string $street, ?string $city, ?string $zipcode, ?string $country) : Address
    {
        $address = new Address();
        $address
            ->setStreet($street)
            ->setCity($city)
            ->setZipcode($zipcode)
            ->setCountry($country)
        ;

        $this->em->persist($address);

        return $address;
    }
}