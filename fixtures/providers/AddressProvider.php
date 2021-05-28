<?php

namespace App\DataFixtures;

use Faker\Generator;

class AddressProvider
{
    public function addressCountry()
    {
        $key = array_rand($this->country);
        return $this->country[$key];
    }

    private $country = [
        "FR",
        "EN",
        "DE"
    ];
}
