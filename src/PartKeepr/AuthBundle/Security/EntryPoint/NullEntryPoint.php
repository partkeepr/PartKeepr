<?php

namespace PartKeepr\AuthBundle\Security\EntryPoint;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface;

/**
 * Implements a NullEntryPoint to avoid that the user is being asked for their password in HTTP Basic Auth Scenarios.
 */
class NullEntryPoint implements AuthenticationEntryPointInterface
{
    /**
     * {@inheritdoc}
     */
    public function start(Request $request, AuthenticationException $authException = null)
    {
        $response = new Response();
        $response->setStatusCode(401);

        return $response;
    }
}
