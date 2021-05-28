<?php

namespace App\Entity;

use App\Repository\MemberRepository;
use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;

use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=MemberRepository::class)
 * @ORM\Table(name="fos_user")
 */
class Member extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups("member:read:all")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups("member:read:all")
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups("member:read:all")
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=3)
     * 
     * @Groups("member:read:all")
     */
    private $civility;

    /**
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(type="datetime")
     * 
     * @Groups("member:read:all")
     */
    private $createdAt;


    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     * 
     * @Groups("member:read:all")
     */
    private $phoneNumber;

    /**
     * @ORM\ManyToOne(targetEntity=Address::class, inversedBy="members")
     * @ORM\JoinColumn(nullable=false)
     * 
     * @Groups("member:read:all")
     */
    private $address;

    /**
     * @var string
     * 
     * @Groups("member:read:all")
     */
    protected $username;

    /**
     * @var string
     */
    protected $usernameCanonical;

    /**
     * @var string
     * 
     * @Groups("member:read:all")
     */
    protected $email;

    /**
     * @var string
     */
    protected $emailCanonical;

    /**
     * @var bool
     * 
     * @Groups("member:read:all")
     */
    protected $enabled;

    /**
     * The salt to use for hashing.
     *
     * @var string
     */
    protected $salt;

    /**
     * Encrypted password. Must be persisted.
     *
     * @var string
     */
    protected $password;

    /**
     * Plain password. Used for model validation. Must not be persisted.
     *
     * @var string
     */
    protected $plainPassword;

    /**
     * @var \DateTime|null
     * 
     * @Groups("member:read:all")
     */
    protected $lastLogin;

    /**
     * Random string sent to the user email address in order to verify it.
     *
     * @var string|null
     */
    protected $confirmationToken;

    /**
     * @var \DateTime|null
     */
    protected $passwordRequestedAt;

    /**
     * @var GroupInterface[]|Collection
     */
    protected $groups;

    /**
     * @var array
     * 
     * @Groups("member:read:all")
     */
    protected $roles;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getAddress(): ?Address
    {
        return $this->address;
    }

    public function setAddress(?Address $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getCivility(): ?string
    {
        return $this->civility;
    }

    public function setCivility(string $civility): self
    {
        $this->civility = $civility;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }
}
