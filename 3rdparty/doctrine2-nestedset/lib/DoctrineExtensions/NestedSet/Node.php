<?php
/*
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * This software consists of voluntary contributions made by many individuals
 * and is licensed under the LGPL.
 */

namespace DoctrineExtensions\NestedSet;


/**
 * Indicates a class supports hierarchical relations where each element has
 * exactly 0 or 1 parent and multiple children.  The position within this
 * hierarchy is calculated using a NestedSet algorithm.
 *
 * For more information on NestedSets:
 *   http://dev.mysql.com/tech-resources/articles/hierarchical-data.html
 *
 * @author  Brandon Turner <bturner@bltweb.net>
 */
interface Node
{

    /**
     * gets a unique identifier for this node
     *
     * @return mixed
     */
    public function getId();

    /**
     * gets a string representation of the Node
     *
     * @return string
     */
    public function __toString();

    /**
     * gets Node's left value
     *
     * @return int
     */
    public function getLeftValue();

    /**
     * sets Node's left value
     *
     * @param int $lft
     */
    public function setLeftValue($lft);

    /**
     * gets Node's right value
     *
     * @return int
     */
    public function getRightValue();

    /**
     * sets Node's right value
     *
     * @param int $rgt
     */
    public function setRightValue($rgt);
}
