<?php

namespace PartKeepr\CoreBundle\Services;

use PartKeepr\CoreBundle\PartKeeprVersion;
use PartKeepr\RemoteFileLoader\RemoteFileLoaderFactory;
use Symfony\Component\Translation\TranslatorInterface;

class VersionService
{
    /**
     * @var SystemNoticeService
     */
    private $systemNoticeService;

    /**
     * @var string
     */
    private $versionURI = 'http://www.partkeepr.org/versions.json';

    /**
     * @var TranslatorInterface
     */
    private $translator;

    /**
     * @var string
     */
    private $version;

    /**
     * @var RemoteFileLoaderFactory
     */
    private $remoteFileLoader;

    public function __construct(SystemNoticeService $systemNoticeService, TranslatorInterface $translator, RemoteFileLoaderFactory $remoteFileLoader)
    {
        $this->systemNoticeService = $systemNoticeService;
        $this->translator = $translator;
        $this->remoteFileLoader = $remoteFileLoader;

        $this->setVersion(PartKeeprVersion::PARTKEEPR_VERSION);
    }

    /**
     * Extracts the current commit from GIT.
     *
     * @return string
     */
    public function extractGITCommit()
    {
        $result = shell_exec("git rev-parse HEAD");

        return trim($result);
    }

    /**
     * Extracts the current short commit from GIT.
     *
     * @return string
     */
    public function extractShortGITCommit()
    {
        $result = shell_exec("git rev-parse --short HEAD");

        return trim($result);
    }

    /**
     * Sets the version string.
     *
     * @param $version string The version
     */
    public function setVersion($version)
    {
        $this->version = $version;
    }

    /**
     * Returns the current version string.
     *
     * @return string The version
     */
    public function getVersion()
    {
        return $this->version;
    }

    public function setVersionURI($versionURI)
    {
        $this->versionURI = $versionURI;
    }

    public function getCanonicalVersion()
    {
        if ($this->getVersion() === '{V_GIT}') {
            return 'GIT development version Commit '.$this->extractGITCommit()." Short Commit ".$this->extractShortGITCommit();
        } else {
            return $this->getVersion();
        }
    }

    /**
     * Checks against the versions at partkeepr.org.
     *
     * If a newer version was found, create a system notice entry.
     */
    public function doVersionCheck()
    {
        if ($this->getVersion() === '{V_GIT}') {
            return;
        }

        if (substr($this->getVersion(), 0, 17) === 'partkeepr-nightly') {
            return;
        }

        $latestVersion = $this->getLatestVersion();

        if ($latestVersion === false) {
            return;
        }

        if (version_compare($this->getVersion(), $latestVersion['version'], '<')) {
            $this->systemNoticeService->createUniqueSystemNotice(
                'PARTKEEPR_VERSION_'.$latestVersion['version'],
                $this->translator->trans(
                    'New PartKeepr Version %version% available',
                    ['%version%' => $latestVersion['version']]
                ),
                $this->translator->trans('PartKeepr Version %version% changelog:', [
                    '%version%' => $latestVersion['version']."\n\n".
                        $latestVersion['changelog'],
                ])
            );
        }
    }

    /**
     * Returns the latest version information from partkeepr.org.
     *
     * @return array|bool
     */
    public function getLatestVersion()
    {
        $data = $this->remoteFileLoader->createLoader()->load($this->versionURI);
        $versions = json_decode($data, true);

        if (!is_array($versions)) {
            return false;
        }

        $latestVersionEntry = $versions[0];

        if (!array_key_exists('version', $latestVersionEntry)) {
            return false;
        }

        if (!array_key_exists('changelog', $latestVersionEntry)) {
            return ['version' => $latestVersionEntry['version'], 'changelog' => ''];
        } else {
            return ['version' => $latestVersionEntry['version'], 'changelog' => $latestVersionEntry['changelog']];
        }
    }
}
