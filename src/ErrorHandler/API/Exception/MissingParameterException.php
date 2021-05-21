<?php
namespace App\ErrorHandler\API\Exception;
 
use RuntimeException;
 
/**
 * Triggered when try to create a product with an
 * SKU already in use.
 */
class MissingParameterException extends RuntimeException
{
}